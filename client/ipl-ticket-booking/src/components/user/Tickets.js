import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from "@react-pdf/renderer";
import "./Tickets.css";

const Tickets = () => {
  const [ticketDetails, setTicketDetails] = useState(null);
  const [error, setError] = useState(null);

  // Fetch ticket details
  useEffect(() => {
    const fetchTicketDetails = async () => {
      try {
        const aadhar = localStorage.getItem("aadhar");
        if (!aadhar) {
          throw new Error("Aadhar not found in localStorage");
        }

        const emailResponse = await fetch(`http://localhost:8080/api/getEmailByAadhar?aadhar=${aadhar}`);
        if (!emailResponse.ok) {
          throw new Error("Failed to fetch email");
        }

        const email = await emailResponse.text();

        const ticketResponse = await fetch(`http://localhost:8080/api/get-all-user-ticket?email=${email}`);
        if (!ticketResponse.ok) {
          throw new Error("Failed to fetch ticket details");
        }

        const data = await ticketResponse.json();
        setTicketDetails(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchTicketDetails();
  }, []);

  // PDF Ticket Design
  const TicketPDF = () => (
    <Document>
      <Page style={pdfStyles.page}>
        <View style={pdfStyles.ticket}>
          <Text style={pdfStyles.header}>IPL Match Ticket</Text>
          <Text style={pdfStyles.subHeader}>Official Ticket</Text>
          <View style={pdfStyles.details}>
            <Text style={pdfStyles.detail}>Name: {ticketDetails.name}</Text>
            <Text style={pdfStyles.detail}>Age: {ticketDetails.age}</Text>
            <Text style={pdfStyles.detail}>Gender: {ticketDetails.gender}</Text>
            <Text style={pdfStyles.detail}>Seat Number: {ticketDetails.seatNumber}</Text>
            <Text style={pdfStyles.detail}>Class: {ticketDetails.className}</Text>
            <Text style={pdfStyles.detail}>Match ID: {ticketDetails.matchId}</Text>
            <Text style={pdfStyles.detail}>Payment Method: {ticketDetails.method}</Text>
            <Text style={pdfStyles.detail}>Ticket Price: ₹{ticketDetails.price}</Text>
            <Text style={pdfStyles.detail}>Ticket Number: {ticketDetails.ticketNumber}</Text>
          </View>
          <Text style={pdfStyles.footer}>Enjoy the Match! 🏏</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <div className="tickets-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="navbar-title">
          <i className="fa fa-ticket" /> My Tickets
        </h1>
        <Link to="/user-dashboard" className="nav-link">
          <i className="fa-solid fa-columns" /> Dashboard
        </Link>
      </nav>

      {/* Ticket Display */}
      <div className="ticket-display">
        {error ? (
          <div className="error-message">{error}</div>
        ) : !ticketDetails ? (
          <p className="loading">Fetching ticket details...</p>
        ) : (
          <div className="ticket-card">
            <div className="ticket-header">
              <h3>IPL Match Ticket</h3>
              <span className="ticket-subheader">Official Ticket</span>
            </div>
            <div className="ticket-body">
              <p><strong>Name:</strong> {ticketDetails.name}</p>
              <p><strong>Age:</strong> {ticketDetails.age}</p>
              <p><strong>Gender:</strong> {ticketDetails.gender}</p>
              <p><strong>Seat Number:</strong> {ticketDetails.seatNumber}</p>
              <p><strong>Class:</strong> {ticketDetails.className}</p>
              <p><strong>Match ID:</strong> {ticketDetails.matchId}</p>
              <p><strong>Payment Method:</strong> {ticketDetails.method}</p>
              <p><strong>Price:</strong> ₹{ticketDetails.price}</p>
              <p><strong>Ticket Number:</strong> {ticketDetails.ticketNumber}</p>
            </div>
            <div className="ticket-footer">
              <PDFDownloadLink
                document={<TicketPDF />}
                fileName={`Match_Ticket_${ticketDetails.ticketNumber}.pdf`}
              >
                <i className="fa fa-download" title="Download Ticket"></i>
              </PDFDownloadLink>
              <span>Enjoy the Match! 🏏</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tickets;

// PDF Styles
const pdfStyles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    padding: 30,
  },
  ticket: {
    border: "1px solid #000",
    borderRadius: 8,
    padding: 20,
    marginBottom: 10,
  },
  header: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 5,
  },
  subHeader: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 15,
  },
  details: {
    marginVertical: 10,
  },
  detail: {
    fontSize: 14,
    marginBottom: 5,
  },
  footer: {
    textAlign: "center",
    fontSize: 14,
    marginTop: 20,
  },
});

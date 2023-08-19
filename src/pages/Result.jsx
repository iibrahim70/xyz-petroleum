import React from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";

const Result = () => {
  const storedFormData = JSON.parse(localStorage.getItem("formData")) || {};
  const {
    projectName,
    projectDescription,
    client,
    contractor,
    max_X,
    max_Y,
    max_Z,
    min_X,
    min_Y,
    min_Z,
  } = storedFormData;

  // Create styles
  const styles = StyleSheet.create({
    page: {
      margin: 20,
      lineHeight: "2px",
      fontWeight: 400,
      fontSize: "14px",
    },
  });

  // Define a PDF document component
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text>Project Name: {projectName}</Text>
        <Text>Project Description: {projectDescription}</Text>
        <Text>Client: {client}</Text>
        <Text>Contractor: {contractor}</Text>
        <Text>Max X: {max_X}</Text>
        <Text>Max Y: {max_Y}</Text>
        <Text>Max Z: {max_Z}</Text>
        <Text>Min X: {min_X}</Text>
        <Text>Min Y: {min_Y}</Text>
        <Text>Min Z: {min_Z}</Text>
      </Page>
    </Document>
  );

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Project Description</th>
            <th>Client</th>
            <th>Contractor</th>
            <th>Max X</th>
            <th>Max Y</th>
            <th>Max Z</th>
            <th>Min X</th>
            <th>Min Y</th>
            <th>Min Z</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{projectName}</td>
            <td>{projectDescription}</td>
            <td>{client}</td>
            <td>{contractor}</td>
            <td>{max_X}</td>
            <td>{max_Y}</td>
            <td>{max_Z}</td>
            <td>{min_X}</td>
            <td>{min_Y}</td>
            <td>{min_Z}</td>
          </tr>
        </tbody>
      </table>

      {/* Add a button to trigger PDF download */}
      <PDFDownloadLink document={<MyDocument />} fileName="project_details.pdf">
        {({ loading }) =>
          loading ? (
            <button>Loading document...</button>
          ) : (
            <button className="primary-button m-5">Download PDF</button>
          )
        }
      </PDFDownloadLink>
    </div>
  );
};

export default Result;

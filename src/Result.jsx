import React from "react";
import { useFormContext } from "./componants/FormContext";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";

const Result = () => {
  const { formData } = useFormContext();
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
  } = formData;

  // Create styles
  const styles = StyleSheet.create({
    page: {
      flexDirection: "col",
      margin: 20,
    },
  });

  // Define a PDF document component
  const MyDocument = () => (
    <Document>
      <Page size="A4" orientation="landscape" style={styles.page}>
        <Text className="text-red-200">Project Name: {projectName}</Text>
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

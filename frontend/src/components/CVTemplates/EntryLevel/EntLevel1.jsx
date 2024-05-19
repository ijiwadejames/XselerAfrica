/** @format */

import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import pic from "../../../Assets/images/ProfilePictures/pic.jpg";

// Optional: Register a custom font
Font.register({
  family: "Open Sans",
  src:
    "https://fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UN7rgOUuhs.ttf",
});

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
  },
  leftColumn: {
    backgroundColor: "#f6f6f6",
    width: "35%",
    padding: 20,
  },
  rightColumn: {
    padding: 20,
    width: "65%",
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  header: {
    fontFamily: "Open Sans",
    fontSize: 22,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: 700,
  },
  sectionTitle: {
    fontSize: 18,
    marginTop: 10,
    fontFamily: "Open Sans",
    fontWeight: 700,
  },
  text: {
    fontSize: 12,
    fontFamily: "Open Sans",
    marginTop: 5,
  },
  objective: {
    fontSize: 12,
    fontFamily: "Open Sans",
    marginTop: 5,
    fontWeight: 100,
  },
  bulletPoint: {
    marginLeft: 10,
    marginRight: 5,
    fontSize: 10,
  },
  bulletText: {
    flex: 1,
    fontSize: 12,
    fontFamily: "Open Sans",
  },
  bulletContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
});

//Bullet point component
const BulletPoint = ({ text }) => (
  <View style={styles.bulletContainer}>
    <Text style={styles.bulletPoint}>•</Text>
    <Text style={styles.bulletText}>{text}</Text>
  </View>
);

// Create Document Component
const EntLevel1 = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.leftColumn}>
        <Image style={styles.image} src={pic} />
        <Text style={styles.header}>Ijiwade James</Text>
        <Text style={styles.text}>Web Developer</Text>
        <Text style={styles.text}>ijiwadejames@gmail.com</Text>
        <Text style={styles.text}>07063073339</Text>
      </View>
      <View style={styles.rightColumn}>
        <Text style={styles.sectionTitle}>Profile</Text>
        <Text style={styles.objective}>
          Detail-oriented Web Developer with 3+ years of experience in
          designing, developing, and managing complex e-commerce sites and
          internal frameworks. Specializes in ReactJS and responsive design.
        </Text>
        <Text style={styles.sectionTitle}>Education</Text>
        <BulletPoint text="B.Sc. in Chemistry, Adekunle Ajasin University, 2011 - 2015" />
        <Text style={styles.sectionTitle}>Professional Experience</Text>
        <BulletPoint text="Web Solutions Inc., Web Developer, 2021-2023" />
        <BulletPoint text="Developed an e-commerce website that processed over 100K transactions in its first year." />
        <BulletPoint text="Led the migration of website architecture from Angular to React, improving load times by 30%." />
        <Text style={styles.sectionTitle}>Skills</Text>
        <BulletPoint text="Proficient in JavaScript, React, Node.js" />
        <BulletPoint text="Experience with RESTful services and API integration" />
        <BulletPoint text="Strong problem-solving skills and ability to perform well in a team" />
        <Text style={styles.sectionTitle}>Hobbies</Text>
        <BulletPoint text="Coding" />
        <BulletPoint text="Researching" />
        <BulletPoint text="Reading science fiction" />
      </View>
    </Page>
  </Document>
);

export default EntLevel1;

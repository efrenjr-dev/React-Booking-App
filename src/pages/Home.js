import { Container } from "react-bootstrap";
import Banner from "../components/Banner";

export default function Home() {

    let landingProp = {
		title: "Booking System",
		header: "Welcome to Our Course Enrollment Platform!",
        paragraph: "Are you ready to take your skills to the next level? Look no further! Our booking app offers a seamless experience for enrolling in courses that will transform your knowledge and career.",
		buttonCallToAction: "Enroll Now!",
		destination: "/login"
	};

    return ( <>
        <Banner bannerProp={landingProp}/>
    </>);
}

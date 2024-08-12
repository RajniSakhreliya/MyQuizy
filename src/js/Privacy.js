import '../css/privacy.scss';
import React from "react";
import BackBar from "./Views/BackBar";
import Margin from './Views/Margin';

const Privacy = () => {
    const { innerWidth: width, innerHeight: height } = window;

    return (
        <div style={{
            minHeight: height
        }}
            className='Privacy'>

            <BackBar headingValue={"Privacy Policy"} />

            <div style={{ padding: "15px" }}>
                <div className='description'>We, at Quizy Games appreciate the trust and information entrusted upon us by you, and seeks to protect such information to the best extent possible, and only use the information in a manner provided in this privacy policy ("Privacy Policy")
                    <Margin />As we update, improve and expand Quizy Games Club, this policy may change, so please refer to it periodically. By accessing the Quizy Games, you give us your consent to collect, store, and use the information you provide (including any changes thereto as provided by you) for any of the services that we offer. Quizy Games (Our M-Web solution), is owned and operated by Quizy Games. Quizy Games offers its end users interesting daily quiz (the number of quizzes that we run daily may vary), all the users who answer all the questions correctly of the quiz are announced as winners. Quiz contests are rank based and coins as reward is given basis the rank metrics. The user can check these details before joining any contest.
                    <Margin />The winner of these quiz contests get coins in their Quizy Games wallet. This Privacy Policy applies to information collected through the services, as well as other information provided to us online or offline by End Users, Advertisers and other customers or users of our Product; however, it does not apply to information collected from our employees, contractors or vendors.
                    <Margin />By using Quizy Games, you understand and accept this privacy policy along with any changes as may be made from time to time ("Privacy Policy") and thereby expressly consent to our collection, use and disclosure of Personal Information in accordance with this Privacy Policy.
                    <Margin />Do not access or use our Services (Quizy Games or https://example.com/ website pages) by any means or technology which conceals your actual geo-location or is unable to provide accurate details of the location (for example, use a virtual private network (VPN) to access Quizy Games Services).
                    <Margin />To be able to register & play seamlessly on Quizy Games you should have a Smartphone with an internet browser and good Data/Internet connectivity. The services may get disrupted in absences of the same.
                    <Margin />

                    <div className='heading'><h2>Information you give us:</h2></div>
                    <Margin />To avail services on Quizy Games, you are required to provide following information for the registration/login process.
                    <Margin /><b>(a) Google Login</b>
                    <Margin />We verify and validate the Gmail id provided by you.
                    <Margin />All required information is service dependent and the company may use the above said user information to maintain, protect, and improve the Quizy Games and for developing new services.
                    <Margin />In case you choose to decline to submit details during registration, we will not be able to provide services on Quizy Games. We will make reasonable efforts to notify you of the same at the time of opening your account.
                    <Margin />

                    <div className='heading'><h2>Information we capture/ track /obtain:</h2></div>
                    <Margin />(This information is only captured from your device after you grant permission to Quizy Games)
                    <Margin />We capture/ track information from your use of services. This information may be obtained from third parties in some cases. This information is used to provide best & customized service to each of our users, improve overall service delivery, devise new services, identify and reduce fraud or un-authorized use of our services and other purposes. All this information is captured after your explicit confirmation and permissions wherever required. Information tracked has been mentioned below to give details of the same.

                    <Margin />
                    <div className='heading'><h2>1. Log information</h2></div>

                    <Margin />When you use our services or view content provided by Quizy Games, we automatically collect and store certain information in server logs. This includes:
                    <Margin />A. Details of how you used our service
                    <Margin />B. To provide relevant offers based upon your interest
                    <Margin />C. Internet protocol address
                    <Margin />D. Cookies that may uniquely identify your browser or your Quizy Games Account.

                    <Margin />
                    <Margin />
                    <b>How we use this information</b>
                    <Margin />We use information collected from cookies and other technologies, like pixel tags etc. to improve your user experience and the overall quality of our services. We use multiple such 3rd party services like Google Analytics, etc. We may combine personal information from one service with information, including personal information, from other services to create a rich profile of you, to better your experience on Quizy Games.

                    <Margin />
                    <div className='heading'><h2>2. Location information</h2></div>
                    <Margin />When you use Quizy Games services, we may collect and process information about your location. We use various technologies to determine location, including IP address, GPS, and other sensors that may, for example, provide Quizy Games with information on nearby devices, Wi-Fi access points and cell towers.
                    <Margin /><b>How we use this information</b>
                    <Margin />We use location information to maintain & improve services provided to you, to develop new services. These services include those provided to users within the web and via email communications that we shall send to you as mentioned above. We also use this information to offer you tailored & customized offers within the, website and emails.
                    <Margin />We do not reach out to the user or send any communication except for the purpose solely related to the product & its services.

                    <Margin />
                    <div className='heading'><h2>3. Local storage</h2></div>
                    <Margin />We may collect and store information locally on your browser using mechanisms such as application data, caches.
                    <Margin /><b>How we use this information</b>
                    <Margin />This information is used to:
                    <Margin />(a) Maintain your login session on Quizy Games
                    <Margin />(b) This information may also be used from time-to- time to sync with Quizy Games servers and update services that we provide to you within the web on your next usage

                    <Margin />
                    <div className='heading'><h2>4. Cookies and similar technologies</h2></div>
                    <Margin />We and our partners use various technologies to collect and store information when you visit a Quizy Games service, and this may include using cookies or similar technologies to identify your browser or device. We also use these technologies to collect and store information when you interact with services we offer to our partners, such as advertising services or Quizy Games features that may appear on other sites or various SDKs we use for product analytics that help us analyze the traffic.
                    <Margin /><b>How we use this information</b>
                    <Margin />The information collected is used to maintain & verify your product related activities. We also use it to keep your coins and coins wallet secured & updated. We use information collected from cookies and other technologies like pixel tags, post backs etc. to improve your user experience and the overall quality of our services. We use multiple tools & 3rd party services like Google Analytics, Branch metrics etc. We may combine personal information from one service with information, including personal information, from other services to give you best experience within Quizy Games. We sign Non-Disclosure Agreement with all such companies from where we avail these services to ensure best protection of your personal data.

                    <Margin />
                    <div className='heading'><h2>Information we share:</h2></div>
                    <Margin />We do not share your personal information with companies, organizations and individuals outside of Quizy Games & its partner companies unless one of the following circumstances applies:
                    <Margin /><b>(a) With your consent</b>
                    <Margin />We will share device level information with companies, organizations or individuals outside of Quizy Games when we have your consent to do so. When you agree to our Privacy Policy, you provide us consent to share your device level information (mainly used for analytics and services purpose). We do not share your personally identifiable information with any entity outside Quizy Games.

                    <Margin /><b>(b) For external processing:</b>
                    <Margin />We provide information to our affiliates or other trusted businesses or persons to process it for us, based on our instructions and in compliance with Privacy Policy and any other appropriate confidentiality and security measures.

                    <Margin /><b>(c) For legal reasons</b>
                    <Margin />We will share personal information with companies, organizations or individuals outside of Quizy Games & its partner companies due to various legal reasons.
                    <Margin />Personally identifiable information may be transferred as an asset in connection with a merger or sale (including any transfers made as part of an insolvency or bankruptcy proceeding) involving all or part of our business or as part of a corporate reorganization, stock sale, or other change in control. Your visit and any dispute over privacy are subject to this policy and our terms and conditions, including limitations on damages. We will only share your personal information with other companies or individuals outside of Quizy Games & its partner companies in the following circumstances:
                    <Margin />I. To facilitate our service/ provide service on our behalf
                    <Margin />II. To assist us in analyzing how you used our service

                    <Margin />
                    <div className='heading'><h2>Permissions that we require</h2></div>
                    <Margin />Quizy Games requires following permissions to perform normally on your device
                    <Margin />(a)Notification permission: We require this permission to notify our users about the activities of Quizy Games. We only send notifications to users who give their consent for the same.
                    <Margin />In some cases, we may enable you to access third party products or services through our Services. Please note that those products or services are offered by people or companies not affiliated with or controlled by us, and we are not responsible for their actions, their terms, their use of information, or their products or services. If you submit your information to a third party, that third party’s treatment of your information is governed by their privacy policy, which may differ from this Privacy Policy and which we encourage you to review.
                    <Margin />Please note that usage of Quizy Games is limited to users within India only. We also start registration with mobile number soon so that only users with valid & active Indian mobile number should use the services on web. Registration on Quizy Games requires you to have an Indian mobile number (starting with +91), and you cannot register with a mobile number that does not belong to India. You should not use our services outside India. Do not access or use our services by any means or technology which conceals your actual geo-location or is unable to provide accurate details of the location (for example, using a virtual private network (VPN) to access services offered by Quizy Games).

                </div>
            </div>

            {/* <dir className='sponsored'>
                <p>SPONSORED</p>
            </dir> */}
        </div>
    )
}

export default Privacy
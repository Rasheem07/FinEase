import React from 'react'

export default function Page() {
  return (
    <div className=" bg-mainBG text-label-color">
      <div className="container mx-auto py-8 px-6">
        <h1 className="text-3xl font-bold mb-4">About Our Financial Tracker Web App</h1>
        <p className="text-lg mb-6">
          Welcome to our financial tracker web app! We're dedicated to helping you manage your finances with ease, security, and peace of mind. Our platform empowers users like you to take control of your financial journey and achieve your goals.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Key Features:</h2>
        <ul className="list-disc list-inside mb-6">
          <li>
            <span className="font-semibold">Balance Overview:</span> Quickly view your account balances in one place, providing you with a clear snapshot of your financial status at a glance.
          </li>
          <li>
            <span className="font-semibold">Secure Bank Account Linking:</span> Link your bank accounts securely to our app. We prioritize your security and use industry-standard encryption techniques to hash and protect your account details.
          </li>
          <li>
            <span className="font-semibold">Advanced Security Measures:</span> Your privacy and security are paramount. We implement JSON Web Tokens (JWT) and tokenization methods to securely authenticate and authorize access to your account information.
          </li>
          <li>
            <span className="font-semibold">Seamless Transaction Management:</span> Access detailed transaction histories effortlessly. Our platform simplifies the process of fetching transaction details, allowing you to track your expenses efficiently.
          </li>
          <li>
            <span className="font-semibold">Expense Tracking and Goal Setting:</span> Set financial goals and track your progress with ease. Our app empowers you to manage expenses effectively and stay on track toward achieving your financial objectives.
          </li>
          <li>
            <span className="font-semibold">Bill Management and Notifications:</span> Never miss a bill payment deadline again. Our app allows you to add bills, set reminders, and receive notifications when payment deadlines approach.
          </li>
        </ul>
        <p className="text-lg">
          Our financial tracker web app is completely free to use. We're committed to providing a secure and user-friendly platform for managing your finances. Rest assured, we prioritize the security of your data, and we take full responsibility for any issues that may arise.
        </p>
        <p className="text-lg">
          Join our community today and embark on a journey towards financial empowerment and stability. If you have any questions or concerns, please don't hesitate to contact us. We're here to support you every step of the way. Thank you for choosing our financial tracker web app!
        </p>
      </div>
    </div>
  );
};


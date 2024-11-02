import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-pink-50 p-6">
      {/* Header Section */}
      <header className="text-center py-8">
        <h1 className="text-5xl font-bold text-purple-600">About BabyCare</h1>
        <p className="mt-4 text-lg text-gray-700">Our mission is to support parents and nurture the little ones</p>
      </header>

      {/* Mission Section */}
      <section className="mt-12 bg-purple-100 p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-semibold text-purple-500 mb-4">Our Mission</h2>
        <p className="text-gray-700">
          At BabyCare, we are dedicated to providing the best products, advice, and resources to help parents give their babies the love and care they deserve. From day one, our focus has been to ensure that every parent feels supported and every baby grows happy and healthy.
        </p>
        {/* <img src="https://via.placeholder.com/400" alt="Our Mission" className="mx-auto mt-6 rounded-lg shadow-md" /> */}
      </section>

      {/* Team Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-purple-600 text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Team Member 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src="https://www.shutterstock.com/image-photo/human-face-women-portrait-260nw-296481974.jpg" alt="Team Member 1" className="mx-auto rounded-full shadow-md mb-4 h-80" />
            <h3 className="text-xl font-semibold text-purple-500 mb-2">Emily Johnson</h3>
            <p className="text-gray-700">Founder & CEO</p>
            <p className="mt-4 text-gray-500">Emily started BabyCare with a passion to create a trusted space for parents. With over 10 years of experience in baby care, she leads the company with a vision to make parenthood easier and joyful.</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src="https://img.freepik.com/premium-photo/studio-shot-attractive-young-woman-isolated-white-created-with-generative-ai_762026-34551.jpg" alt="Team Member 2" className="mx-auto rounded-full shadow-md mb-4" />
            <h3 className="text-xl font-semibold text-purple-500 mb-2">Michael Smith</h3>
            <p className="text-gray-700">Chief Pediatric Advisor</p>
            <p className="mt-4 text-gray-500">Dr. Michael Smith, a pediatrician with over 15 years of experience, ensures that BabyCare offers accurate and trusted health advice to parents. He’s dedicated to improving the health and well-being of babies everywhere.</p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src="https://static.vecteezy.com/system/resources/previews/036/008/107/non_2x/ai-generated-businesswoman-isolated-on-transparent-background-free-png.png" alt="Team Member 3" className="mx-auto rounded-full shadow-md mb-4 h-80"/>
            <h3 className="text-xl font-semibold text-purple-500 mb-2 hieght" >Sophia Martinez</h3>
            <p className="text-gray-700">Product Development Manager</p>
            <p className="mt-4 text-gray-500">Sophia oversees the development of BabyCare's innovative products. Her dedication to quality ensures that every item we offer meets the highest safety and comfort standards for babies.</p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="mt-16 bg-purple-100 p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-semibold text-purple-500 mb-4">Our Core Values</h2>
        <p className="text-gray-700 mb-8">
          At BabyCare, we are guided by our core values of love, trust, and innovation. We believe that by putting families first, we can create products and services that make a meaningful difference in the lives of parents and their babies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-purple-500 mb-2">Love</h3>
            <p className="text-gray-700">We are driven by the love parents have for their children. Our products and services are designed to nurture that bond.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-purple-500 mb-2">Trust</h3>
            <p className="text-gray-700">We strive to be a trusted partner in your parenting journey by providing expert advice and reliable products.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-purple-500 mb-2">Innovation</h3>
            <p className="text-gray-700">We continuously innovate to create products that solve real parenting challenges and enhance the lives of families.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center mt-12 text-gray-500">
        © 2024 BabyCare. All rights reserved. | Privacy Policy | Terms of Service
      </footer>
    </div>
  );
}

export default AboutUs;

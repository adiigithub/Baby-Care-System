import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-blue-50 p-6">
      {/* Header Section */}
      <header className="text-center py-8">
        <h1 className="text-5xl font-bold text-blue-600">Welcome to BabyCare</h1>
        <p className="mt-4 text-lg text-gray-600">Caring for your little ones, every step of the way</p>
      </header>

      {/* Hero Section */}
      <section className="mt-12 bg-blue-100 p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Your Baby's Health & Happiness is Our Priority</h2>
        <p className="text-gray-600">At BabyCare, we provide the best baby products, parenting advice, and health tips to support you in your parenting journey. Trust us to be by your side as you raise your bundle of joy.</p>
        {/* <img src="https://via.placeholder.com/400" alt="BabyCare" className="mx-auto mt-6 rounded-lg shadow-md" /> */}
      </section>

      {/* Services Section */}
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">Baby Products</h3>
          <p className="text-gray-600">Explore our selection of top-quality baby care products, including organic skincare, feeding essentials, and safe toys.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">Health Tips</h3>
          <p className="text-gray-600">Daily health tips from pediatricians and child care experts to ensure your baby stays healthy and happy.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">Parenting Guide</h3>
          <p className="text-gray-600">In-depth articles and videos on topics like sleep training, nutrition, and baby development to guide you on your parenting journey.</p>
        </div>
      </main>

      {/* Testimonial Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-blue-600 text-center mb-8">What Parents Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 italic">"BabyCare has been a lifesaver! The products are high quality and their parenting tips are incredibly helpful."</p>
            <p className="text-blue-500 mt-4 font-semibold">- Sarah M., New Mom</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 italic">"I love the health tips section. It’s like having a pediatrician in my pocket!"</p>
            <p className="text-blue-500 mt-4 font-semibold">- David R., Father of Two</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="mt-16 bg-blue-200 p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold text-blue-600">Stay Updated</h2>
        <p className="text-gray-600 mt-2">Sign up for our newsletter to receive the latest baby care tips, product recommendations, and exclusive offers!</p>
        <form className="mt-6 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-l-lg border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600">Subscribe</button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="text-center mt-12 text-gray-500">
        © 2024 BabyCare. All rights reserved. | Privacy Policy | Terms of Service
      </footer>
    </div>
  );
}

export default Home;

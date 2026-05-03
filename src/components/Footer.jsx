function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-10">
      
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl font-semibold">
          DreamSpace Reality
        </h2>

        <p className="text-sm text-gray-300 mt-2">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>

    </footer>
  );
}

export default Footer;
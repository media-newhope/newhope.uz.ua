export const Footer = () => {
  const menuItems = ['Privacy Policy', 'Terms of Service', 'Blog', 'Careers'];
  const socialIcons = ['Facebook', 'Twitter', 'LinkedIn', 'Instagram'];
  const partners = ['Partner 1', 'Partner 2', 'Partner 3'];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <a href="/" className="text-2xl font-bold">Logo</a>
            <p className="mt-4 text-gray-400">
              123 Business Street<br />
              City, State 12345<br />
              contact@example.com
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialIcons.map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="text-gray-400 hover:text-white"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Our Partners</h3>
            <div className="space-y-4">
              {partners.map((partner) => (
                <div key={partner} className="text-gray-400">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
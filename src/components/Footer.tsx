import React from "react";

const Footer: React.FC = () => (
  <footer className="py-6 border-t border-white/10">
    <div className="container mx-auto px-6 text-center text-secondary">
      <p>
        &copy; {new Date().getFullYear()} AmirHoseinkoosha. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;

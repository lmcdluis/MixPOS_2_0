const LoginLayout = ({ children }) => (
  <div className="contain-fluid h-100 login-layout">
    <div className="row">
      <div className="col-lg-4 col-md-6 mx-auto">
        <div className="">{children}</div>
      </div>
    </div>
  </div>
);

export default LoginLayout;

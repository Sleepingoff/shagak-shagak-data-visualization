const Popup = ({ children, ...props }) => {
  return <dialog {...props}>{children}</dialog>;
};

export default Popup;

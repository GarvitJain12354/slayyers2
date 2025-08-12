
 const BackgroundOvals=() =>{
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,              
        pointerEvents: "none",
        overflow: "hidden",
      }}
      className="select-none"
    >
      {/* Oval 2 */}
      <div
        style={{
          position: "absolute",
          width: "2018.6998291015625px",
          height: "1924.40283203125px",
          top: "-1131.29px",
          left: "-1320.3px",
          background: "#FFFFFF",
          opacity: 0.06,
          borderRadius: "50%",
          transform: "rotate(0deg)",
          filter: "blur(0px)",
          pointerEvents: "none",
        }}
      />

      {/* Oval 1 */}
      <div
        style={{
          position: "absolute",
          width: "1480.5px",
          height: "1411.1142578125px",
          top: "-857.91px",
          left: "-1023.3px",
          background: "#FFFFFF",
          opacity: 0.04,
          borderRadius: "50%",
          transform: "rotate(0deg)",
          filter: "blur(0px)",
          pointerEvents: "none",
        }}
      />

      {/* Oval 0 */}
      <div
        style={{
            
          position: "absolute",
          width: "1035.9000244140625px",
          height: "987.9517211914062px",
          top: "-629.16px",
          left: "-792px",
          background: "#FFFFFF",
          opacity: 0.05,
          borderRadius: "50%",
          transform: "rotate(0deg)",
          filter: "blur(0px)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

export default BackgroundOvals;

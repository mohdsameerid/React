import React, { useState } from "react";

// const Section = ({ title, discription }) => {
//   const [isvisble, setIsVisible] = useState(false);

//   // build our own Acordian Component
//   return (
//     <div className="border border-red-200 bg-gray-300 p-5 m-5">
//       <h1>{title}</h1>
//       {isvisble ? (
//         <button
//           onClick={() => setIsVisible(false)}
//           className="cursor-pointer  underline "
//         >
//           Hide
//         </button>
//       ) : (
//         <button
//           onClick={() => setIsVisible(true)}
//           className="cursor-pointer underline "
//         >
//           Show
//         </button>
//       )}

//       {isvisble && <p>{discription}</p>}
//     </div>
//   );
// };

// const Instamart = () => {
//   return (
//     <>
//       <Section
//         title="About"
//         discription="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
//       />
//       <Section
//         title="Career"
//         discription="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
//       />
//       <Section
//         title="Contact"
//         discription="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
//       />
//     </>
//   );
// };



// Now with lifting the state up ---->
// const Section = ({ title, discription, isvisble, setIsVisible }) => {
//   // build our own Acordian Component
//   return (
//     <div className="border border-red-200 bg-gray-300 p-5 m-5">
//       <h1>{title}</h1>
//       {isvisble ? (
//         <button
//           onClick={() => setIsVisible(false)}
//           className="cursor-pointer  underline "
//         >
//           Hide
//         </button>
//       ) : (
//         <button
//           onClick={() => setIsVisible(true)}
//           className="cursor-pointer underline "
//         >
//           Show
//         </button>
//       )}

//       {isvisble && <p>{discription}</p>}
//     </div>
//   );
// };

// const Instamart = () => {
//     const[sectionConfig, setSectionConfig] = useState({
//         ShowAbout: false,
//         ShowCareer: false,
//         ShowContact: false,
//     });
//   return (
//     <>
//       <Section
//         title="About"
//         discription="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
//         isvisble={sectionConfig.ShowAbout}
//         setIsVisible={ ()=> {
//             setSectionConfig({
//                 ShowAbout: true,
//                 ShowCareer: false,
//                 ShowContact: false,
//             })
//         }}

//       />
//       <Section
//         title="Career"
//         discription="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
//         isvisble={sectionConfig.ShowCareer}
//         setIsVisible={ ()=> {
//             setSectionConfig({
//                 ShowAbout: false,
//                 ShowCareer: true,
//                 ShowContact: false,
//             })
//         }}
//       />
//       <Section
//         title="Contact"
//         discription="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
//         isvisble={sectionConfig.ShowContact}
//         setIsVisible={ ()=> {
//             setSectionConfig({
//                 ShowAbout: false,
//                 ShowCareer: false,
//                 ShowContact: true,
//             })
//         }}
//       />
//     </>
//   );
// };


// Our code getting messy Think about this code    ----->
// this code is alot more better than previous one, and Concept is also invaulved "Lifting the State Up"
// this is perfect Acordian code.

const Section = ({ title, discription, isvisble, setIsVisible ,setInVisble }) => {
    // build our own Acordian Component
    return (
      <div className="border border-red-200 bg-gray-300 p-5 m-5">
        <h1>{title}</h1>
        {isvisble ? (
          <button
            onClick={setInVisble}
            className="cursor-pointer  underline "
          >
            Hide
          </button>
        ) : (
          <button
            onClick={ setIsVisible }
            className="cursor-pointer underline "
          >
            Show
          </button>
        )}
  
        {isvisble && <p>{discription}</p>}
      </div>
    );
  };
  
  const Instamart = () => {
      const[isVisbleSection, setIsVisbleSection] = useState(false);
    return (
      <>
        <Section
          title="About"
          discription="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
          isvisble={isVisbleSection === "about"}
          setIsVisible={ ()=> setIsVisbleSection("about")}
          setInVisble={() => {
            setIsVisbleSection("");
          }}
  
        />
        <Section
          title="Career"
          discription="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
          isvisble={isVisbleSection === "career"}
          setIsVisible={ ()=> setIsVisbleSection("career")}
          setInVisble={() => {
            setIsVisbleSection("");
          }}
        />
        <Section
          title="Contact"
          discription="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
          isvisble={isVisbleSection === "contact"}
          setIsVisible={ ()=> setIsVisbleSection("contact")}
          setInVisble={() => {
            setIsVisbleSection("");
          }}
        />
      </>
    );
  };

export default Instamart;

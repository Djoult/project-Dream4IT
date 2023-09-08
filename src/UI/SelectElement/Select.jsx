// import { useState } from "react";
// import styled from "@emotion/styled";
// import PropTypes from "prop-types";

// const CustomSelect = styled.div`
//   position: relative;
//   max-width: 335px;
// `;

// const SelectButton = styled.button`
//   width: 335px;
//   padding: 18px 24px;
//   border-radius: 200px;
//   font-size: 14px;
//   background: #161f37;
//   color: #f3f3f3;
//   outline: none;
//   text-align: left;
//   border: 1px solid rgba(243, 243, 243, 0.2);
//   cursor: pointer;
//   margin-bottom: 4px;
//   @media only screen and (min-width: 768px) {
//     width: 200px;
//     padding: 18px 24px;
//     font-size: 17px;
//     margin-bottom: 0;
//   }
// `;

// const OptionsWrapper = styled.div`
//   position: absolute;
//   top: calc(100% + 4px);
//   left: 0;
//   right: 0;
//   background: #161f37;
//   color: #f3f3f3;
//   font-size: 17px;
//   border: 1px solid rgba(243, 243, 243, 0.2);
//   border-radius: 20px;
//   max-height: 200px;
//   overflow-y: auto;
//   display: ${({ isOpen }) => (isOpen ? "block" : "none")};
//   padding-right: 8px;
//   z-index: 100;
//   scrollbar-width: 8px;
//   scrollbar-color: #434d67 transparent;
//   ::-webkit-scrollbar {
//     width: 8px;
//   }
//   ::-webkit-scrollbar-thumb {
//     background-color: #434d67;
//     border-radius: 20px;
//     width: 8px;
//   }
//   ::-webkit-scrollbar-corner {
//     background: transparent;
//   }
//   user-select: none;
// `;

// const Option = styled.div`
//   padding: 10px 20px;
//   cursor: pointer;
//   &:hover {
//     background: #0a0a11;
//   }
// `;

// const Placeholder = styled.div`
//   color: #f3f3f3;
//   font-size: 17px;
// `;

// const CustomSelectComponent = ({ options, value, onChange, placeholder }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleSelect = (option) => {
//     onChange(option);
//     setIsOpen(false);
//   };

//   return (
//     <CustomSelect>
//       <SelectButton onClick={() => setIsOpen(!isOpen)}>
//         {placeholder ? <Placeholder>{placeholder}</Placeholder> : value}
//       </SelectButton>
//       {isOpen && (
//         <OptionsWrapper isOpen={isOpen}>
//           <Option key="all" onClick={() => handleSelect("all")}>
//             {placeholder}
//           </Option>
//           {options.map((option) => (
//             <Option key={option} onClick={() => handleSelect(option)}>
//               {option}
//             </Option>
//           ))}
//         </OptionsWrapper>
//       )}
//     </CustomSelect>
//   );
// };

// CustomSelectComponent.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string).isRequired,
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
//   placeholder: PropTypes.string,
// };

// export default CustomSelectComponent;
import { useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const CustomSelect = styled.div`
  position: relative;
  max-width: 335px;
`;

const SelectButton = styled.button`
  width: 335px;
  padding: 18px 24px;
  border-radius: 200px;
  font-size: 14px;
  background: #161f37;
  color: #f3f3f3;
  outline: none;
  text-align: left;
  border: 1px solid rgba(243, 243, 243, 0.2);
  cursor: pointer;
  margin-bottom: 4px;
  @media only screen and (min-width: 768px) {
    width: 200px;
    padding: 18px 24px;
    font-size: 17px;
    margin-bottom: 0;
  }
`;

const OptionsWrapper = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: #161f37;
  color: #f3f3f3;
  font-size: 17px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 20px;
  max-height: 200px;
  overflow-y: auto;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  padding-right: 8px;
  z-index: 100;
  scrollbar-width: 8px;
  scrollbar-color: #434d67 transparent;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #434d67;
    border-radius: 20px;
    width: 8px;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
  user-select: none;
`;

const Option = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background: #0a0a11;
  }
`;

const Placeholder = styled.div`
  color: #f3f3f3;
  font-size: 17px;
`;

const CustomSelectComponent = ({ options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "");

  const handleSelect = (option) => {
    if (option !== selectedValue) {
      setSelectedValue(option);
      onChange(option);
    }
    setIsOpen(false);
  };

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CustomSelect>
      <SelectButton onClick={toggleSelect}>
        {placeholder ? (
          selectedValue || <Placeholder>{placeholder}</Placeholder>
        ) : (
          selectedValue
        )}
      </SelectButton>
      {isOpen && (
        <OptionsWrapper isOpen={isOpen}>
          {options.map((option) => (
            <Option key={option} onClick={() => handleSelect(option)}>
              {option}
            </Option>
          ))}
        </OptionsWrapper>
      )}
    </CustomSelect>
  );
};

CustomSelectComponent.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default CustomSelectComponent;

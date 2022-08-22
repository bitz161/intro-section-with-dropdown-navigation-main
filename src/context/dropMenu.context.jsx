import { createContext, useState } from "react";

export const DropMenuContext = createContext({
  featuresMenu: false,
  companyMenu: false,
  showFeature: false,
});

export const DropMenuProvider = ({ children }) => {
  const [featuresMenu, setFeaturesMenu] = useState(false);
  const [companyMenu, setCompanyMenu] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const value = {
    featuresMenu,
    setFeaturesMenu,
    companyMenu,
    setCompanyMenu,
    showFeatures,
    setShowFeatures,
  };
  return (
    <DropMenuContext.Provider value={value}>
      {children}
    </DropMenuContext.Provider>
  );
};

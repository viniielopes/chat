import React from "react";

const MenuLateralContext = React.createContext();

class MenuLateralProvider extends React.Component {
  state = {
    openModal: false
  };

  fecharMenu = () => {
    this.setState({ openModal: false });
  };

  abrirMenu = () => {
    this.setState({ openModal: true });
  };

  render() {
    return (
      <>
        <MenuLateralContext.Provider
          value={{
            open: this.state.openModal,
            abrirMenu: this.abrirMenu,
            fecharMenu: this.fecharMenu
          }}
        >
          {this.props.children}
        </MenuLateralContext.Provider>
      </>
    );
  }
}

const MenuLateralConsumer = MenuLateralContext.Consumer;

export default MenuLateralProvider;

export { MenuLateralConsumer };

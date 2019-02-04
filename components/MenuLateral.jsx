import {
  List,
  ListItem,
  ListItemText,
  Drawer,
  ListItemIcon
} from "@material-ui/core";
import { MenuLateralConsumer } from "./Contexts/MenuLateralProvider";
import { FaRegLaugh, FaRegHandScissors } from "react-icons/fa";

const MenuLateral = () => (
  <>
    <MenuLateralConsumer>
      {(context) => (
        <Drawer anchor="left" open={context.open} onClose={context.fecharMenu}>
          <List>
            {["Vinicius", "Lopes", "Silva", "Vinicius"].map((nome, index) => {
              return (
                <ListItem key={index}>
                  <ListItemIcon>
                    {index % 2 == 0 ? <FaRegLaugh /> : <FaRegHandScissors />}
                  </ListItemIcon>
                  <ListItemText>{nome}</ListItemText>
                </ListItem>
              );
            })}
          </List>
        </Drawer>
      )}
    </MenuLateralConsumer>
  </>
);

export default MenuLateral;

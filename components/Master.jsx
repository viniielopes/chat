import {
  AppBar,
  IconButton,
  Typography,
  Toolbar,
  Button
} from "@material-ui/core";
import { MdMenu } from "react-icons/md";
import Link from "next/link";
import { MenuLateralConsumer } from "~/components/Contexts/MenuLateralProvider";
import MenuLateral from "~/components/MenuLateral";

const Master = () => (
  <>
    <AppBar position="sticky" id="AppBar">
      <Toolbar variant="regular" className="Toolbar">
        <MenuLateralConsumer>
          {(context) => (
            <IconButton
              color="inherit"
              aria-label="Menu"
              id="btnMenu"
              onClick={context.abrirMenu}
            >
              <MdMenu />
            </IconButton>
          )}
        </MenuLateralConsumer>

        <div id="botoesNavBar">
          <Link href="/index" as="/">
            <Button variant="contained" color="primary">
              <a>Inicio</a>
            </Button>
          </Link>

          <Link href="/chat">
            <Button variant="contained" color="secondary">
              <a>Chat</a>
            </Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>

    <MenuLateral />
    <style jsx="true">{`
      .Toolbar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      #botoesNavBar {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 14rem;
      }
    `}</style>
  </>
);

export default Master;

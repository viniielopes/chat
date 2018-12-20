import {
  AppBar,
  IconButton,
  Typography,
  Toolbar,
  Button
} from "@material-ui/core";
import { MdMenu } from "react-icons/md";
import Link from "next/link";

const Master = () => (
  <>
    <AppBar position="sticky" id="AppBar">
      <Toolbar variant="regular" className="Toolbar">
        <IconButton color="inherit" aria-label="Menu" id="btnMenu">
          <MdMenu />
        </IconButton>

        <div id="botoesNavBar">
          <Link href="/index" as="/">
            <Button variant="contained" color="primary">
              <a>Inicio</a>
            </Button>
          </Link>

          <Link href="/teste">
            <Button variant="contained" color="secondary">
              <a>Segunda tela</a>
            </Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>

    <style jsx="true">{`
      .Toolbar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      #botoesNavBar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 14rem;
      }
    `}</style>
  </>
);

export default Master;

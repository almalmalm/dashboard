import { Grid } from '@mui/material';
import HamburgerMenu from './HamburgerMenu';

export default function Header() {
  return (
    <div>
      <Grid container>
        <Grid size={10}></Grid>
        <Grid size={2}>
          <HamburgerMenu />
        </Grid>
      </Grid>
    </div>
  );
}

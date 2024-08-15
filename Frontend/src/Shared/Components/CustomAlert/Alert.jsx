import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';


const ActionAlerts=()=> {
  return (
<Alert
        severity="success"
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        This Alert uses a Button component for its action.
      </Alert>

  );
}

export default ActionAlerts;

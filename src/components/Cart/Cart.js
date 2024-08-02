import React from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText, IconButton, Divider } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart, onRemove, onUpdateQuantity, onCheckout }) => {
  const navigate = useNavigate();
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Box padding={3}>
      <Typography variant="h5" component="h2" marginBottom={2}>
        {cart?.length>0?'Your Cart':"Your Cart is Empty"}
      </Typography>
      <List>
        {cart.map((item) => (
          <React.Fragment key={item.id}>
            <ListItem>
              <ListItemText
                primary={item.title}
                secondary={`$${item.price} x ${item.quantity}`}
              />
              <IconButton onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
                <RemoveCircleIcon />
              </IconButton>
              <IconButton onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                <AddCircleIcon />
              </IconButton>
              <IconButton onClick={() => onRemove(item.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
      <Box marginTop={2} display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" component="div">
          Total: ${calculateTotal()}
        </Typography>
       {cart?.length>0? <Button variant="contained" color="primary" onClick={onCheckout}>
          Proceed to Checkout
        </Button>:<Button variant="contained" color="primary" onClick={()=>navigate("/")}>
          Select Property
        </Button>}
      </Box>
    </Box>
  );
};

export default Cart;

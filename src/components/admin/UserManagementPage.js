import React, { useState, useEffect } from 'react';
import {
  Box, Typography, Grid, Paper, Tabs, Tab, Divider, TextField,
  InputAdornment, MenuItem, Card, CardContent, TableContainer,
  Table, TableHead, TableRow, TableCell, TableBody, IconButton,
  Chip, Dialog, DialogTitle, DialogContent, DialogActions, Button
} from '@mui/material';
import {
  Group, ShoppingCart, Pending, AttachMoney, Search, FilterList,
  Edit, Delete, Visibility
} from '@mui/icons-material';
import axios from 'axios';

const StatCard = ({ icon, label, value }) => (
  <Paper elevation={3} sx={{ p: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', minWidth: 260 }}>
    <Box sx={{ fontSize: 40 }}>{icon}</Box>
    <Box sx={{ textAlign: 'right' }}>
      <Typography variant="body2" color="text.secondary">{label}</Typography>
      <Typography variant="h6" fontWeight="bold">{value}</Typography>
    </Box>
  </Paper>
);

export default function UserManagementPage() {
  const [orders, setOrders] = useState([]);
  const [userData, setUserData] = useState([]);
  const [tab, setTab] = useState(0);
  const [statusFilter, setStatusFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [editingUser, setEditingUser] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deletingUser, setDeletingUser] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [orderToDelete, setOrderToDelete] = useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://13.235.135.226/auth/user');
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://13.235.135.226/orders');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchOrders();
  }, []);

  const handleEditUser = (user) => {
    setEditingUser(user);
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => setOpenEditModal(false);

  const handleDeleteUserClick = (user) => {
    setDeletingUser(user);
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => setOpenDeleteDialog(false);

  const handleConfirmDeleteUser = async () => {
    try {
      await axios.delete(`http://13.235.135.226/auth/delete/${deletingUser.id}`);
      handleCloseDeleteDialog();
      fetchUsers(); 
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const handleUpdateUser = async () => {
    try {
      await axios.put(`http://13.235.135.226/auth/user/${editingUser.id}`, editingUser);
      handleCloseEditModal();
      fetchUsers(); 
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setSelectedOrder(null);
    setIsOrderModalOpen(false);
  };

  const handleDeleteClick = (order) => {
    setOrderToDelete(order);
    setIsDeleteDialogOpen(true);
  };

  const handleCancelDelete = () => {
    setOrderToDelete(null);
    setIsDeleteDialogOpen(false);
  };

  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`http://13.235.135.226/orders/delete/${orderToDelete.id}`);
      handleCancelDelete();
      fetchOrders(); 
    } catch (err) {
      console.error("Delete order failed", err);
    }
  };

  const filteredUsers = userData.filter(
    (user) =>
      user.name?.toLowerCase().includes(search.toLowerCase()) ||
      user.email?.toLowerCase().includes(search.toLowerCase()) ||
      user.city?.toLowerCase().includes(search.toLowerCase())
  );

  const filteredOrders = orders.filter(
    (order) => statusFilter === 'All' || order.status === statusFilter
  );

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Admin Dashboard
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Manage users and orders
      </Typography>

      <Grid container spacing={2}>
        <Grid item><StatCard icon={<Group />} label="Total Users" value={userData.length} /></Grid>
        <Grid item><StatCard icon={<ShoppingCart />} label="Total Orders" value={orders.length} /></Grid>
        <Grid item><StatCard icon={<Pending />} label="Pending Orders" value={orders.filter(o => o.status === 'Pending').length} /></Grid>
        <Grid item><StatCard icon={<AttachMoney />} label="Revenue" value={`$${orders.reduce((acc, o) => acc + o.price, 0).toFixed(2)}`} /></Grid>
      </Grid>

      <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)} sx={{ mt: 3 }}>
        <Tab label="Users" />
        <Tab label="Orders" />
      </Tabs>
      <Divider sx={{ my: 2 }} />

      {tab === 0 && (
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>User Management</Typography>
            <TextField
              placeholder="Search users..."
              fullWidth
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"><Search /></InputAdornment>
                ),
              }}
              sx={{ mb: 2 }}
            />
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>City</TableCell>
                    <TableCell>Mobile</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredUsers.map(user => (
                    <TableRow key={user.id}>
                      <TableCell>{user.id}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.city}</TableCell>
                      <TableCell>{user.mobile}</TableCell>
                      <TableCell>
                        <Chip label={user.role} color={user.role === 'Admin' ? 'default' : 'primary'} />
                      </TableCell>
                      <TableCell>
                        <IconButton color="primary" onClick={() => handleEditUser(user)}><Edit /></IconButton>
                        <IconButton color="error" onClick={() => handleDeleteUserClick(user)}><Delete /></IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Dialog open={openEditModal} onClose={handleCloseEditModal} fullWidth>
              <DialogTitle>Edit User</DialogTitle>
              <DialogContent>
                <TextField fullWidth label="Name" value={editingUser?.name || ''} onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })} margin="normal" />
                <TextField fullWidth label="Email" value={editingUser?.email || ''} onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })} margin="normal" />
                <TextField fullWidth label="City" value={editingUser?.city || ''} onChange={(e) => setEditingUser({ ...editingUser, city: e.target.value })} margin="normal" />
                <TextField fullWidth label="Mobile" value={editingUser?.mobile || ''} onChange={(e) => setEditingUser({ ...editingUser, mobile: e.target.value })} margin="normal" />
                <TextField fullWidth select label="Role" value={editingUser?.role || ''} onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value })} margin="normal">
                  <MenuItem value="User">User</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                </TextField>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseEditModal}>Cancel</Button>
                <Button onClick={handleUpdateUser} variant="contained" color="primary">Update</Button>
              </DialogActions>
            </Dialog>

            <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog} maxWidth="xs" fullWidth>
              <DialogTitle>Delete User</DialogTitle>
              <DialogContent>
                <Typography>Are you sure you want to delete <strong>{deletingUser?.name}</strong>?</Typography>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseDeleteDialog}>Cancel</Button>
                <Button color="error" onClick={handleConfirmDeleteUser}>Delete</Button>
              </DialogActions>
            </Dialog>
          </CardContent>
        </Card>
      )}

      {tab === 1 && (
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>Order Management</Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <TextField
                placeholder="Search orders..."
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                InputProps={{
                  startAdornment: (<InputAdornment position="start"><Search /></InputAdornment>),
                }}
              />
              <TextField
                select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                InputProps={{
                  startAdornment: (<InputAdornment position="start"><FilterList /></InputAdornment>),
                }}
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Accepted">Accepted</MenuItem>
                <MenuItem value="Rejected">Rejected</MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
              </TextField>
            </Box>

            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Order ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Size</TableCell>
                    <TableCell>Color</TableCell>
                    <TableCell>Material</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredOrders.map(order => (
                    <TableRow key={order.id}>
                      <TableCell>{order.id}</TableCell>
                      <TableCell>{order.name}</TableCell>
                      <TableCell>{order.type}</TableCell>
                      <TableCell>{order.size}</TableCell>
                      <TableCell>{order.color}</TableCell>
                      <TableCell>{order.material}</TableCell>
                      <TableCell>${order.price.toFixed(2)}</TableCell>
                      <TableCell>
                        <Chip label={order.status} color={order.status === 'Accepted' ? 'success' : order.status === 'Rejected' ? 'error' : 'warning'} />
                      </TableCell>
                      <TableCell>
                        <IconButton onClick={() => handleViewOrder(order)} color="primary"><Visibility /></IconButton>
                        <IconButton onClick={() => handleDeleteClick(order)} color="error"><Delete /></IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Dialog open={isOrderModalOpen} onClose={handleCloseOrderModal} fullWidth>
              <DialogTitle>Order Details</DialogTitle>
              <DialogContent>
                {selectedOrder && (
                  <>
                    <Typography><strong>ID:</strong> {selectedOrder.id}</Typography>
                    <Typography><strong>Name:</strong> {selectedOrder.name}</Typography>
                    <Typography><strong>Status:</strong> {selectedOrder.status}</Typography>
                    <Typography><strong>City:</strong> {selectedOrder.city}</Typography>
                    <Typography><strong>Price:</strong> ${selectedOrder.price}</Typography>
                  </>
                )}
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseOrderModal}>Close</Button>
              </DialogActions>
            </Dialog>

            <Dialog open={isDeleteDialogOpen} onClose={handleCancelDelete}>
              <DialogTitle>Delete Order</DialogTitle>
              <DialogContent>
                <Typography>Are you sure you want to delete order <strong>{orderToDelete?.id}</strong>?</Typography>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCancelDelete}>Cancel</Button>
                <Button onClick={handleConfirmDelete} color="error">Delete</Button>
              </DialogActions>
            </Dialog>
          </CardContent>
        </Card>
      )}
    </Box>
  );
}

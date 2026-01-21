import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  styled,
  Paper
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Input = styled('input')({
  display: 'none',
});

const UploadBox = styled(Paper)(({ theme }) => ({
  border: '2px dashed #ccc',
  padding: theme.spacing(4),
  textAlign: 'center',
  cursor: 'pointer',
  backgroundColor: '#f9f9f9',
  '&:hover': {
    backgroundColor: '#f3f3f3',
  }
}));

const LogoTab = () => {
  const [fileName, setFileName] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <Box>
      <Typography variant="subtitle2" fontWeight="medium" mb={2}>
        Upload Logo
      </Typography>

      <label htmlFor="logo-upload">
        <Input
          accept=".png,.jpg,.jpeg,.svg"
          id="logo-upload"
          type="file"
          onChange={handleFileChange}
        />
        <UploadBox elevation={0}>
          <CloudUploadIcon sx={{ fontSize: 40, color: '#9e9e9e', mb: 1 }} />
          <Typography variant="body2" color="textSecondary">
            Click to upload logo
          </Typography>
          <Typography variant="caption" color="textSecondary">
            PNG, JPG, SVG up to 10MB
          </Typography>
          {fileName && (
            <Typography
              variant="body2"
              color="primary"
              sx={{ mt: 1, fontWeight: 'bold' }}
            >
              Selected: {fileName}
            </Typography>
          )}
        </UploadBox>
      </label>
    </Box>
  );
};

export default LogoTab;

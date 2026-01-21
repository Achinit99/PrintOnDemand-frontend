import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';

const quickPresets = ['DESIGN', 'CUSTOM', 'STYLE', 'BRAND'];

const TextTab = () => {
  const [customText, setCustomText] = useState('DESIGN');
  const [fontStyle, setFontStyle] = useState([]);

  const handlePresetClick = (text) => {
    setCustomText(text);
  };

  const handleFontStyle = (event, newStyles) => {
    setFontStyle(newStyles);
  };

  return (
    <Box>
      <Typography variant="subtitle2" fontWeight="medium" mb={1}>
        Custom Text
      </Typography>
      <TextField
        value={customText}
        onChange={(e) => setCustomText(e.target.value)}
        variant="outlined"
        size="small"
        sx={{ mb: 3 }}
      />

      <Typography variant="subtitle2" fontWeight="medium" mb={1}>
        Quick Presets
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
        {quickPresets.map((preset, index) => (
          <Button
            key={index}
            variant="outlined"
            size="small"
            onClick={() => handlePresetClick(preset)}
            sx={{ textTransform: 'none', borderRadius: 4 }}
          >
            {preset}
          </Button>
        ))}
      </Box>

      <Typography variant="subtitle2" fontWeight="medium" mb={1}>
        Font Style
      </Typography>
      <ToggleButtonGroup
        value={fontStyle}
        onChange={handleFontStyle}
        aria-label="text formatting"
        size="small"
        sx={{ display: 'flex', gap: 2 }}
      >
        <ToggleButton value="bold" sx={{ flex: 1 }} aria-label="bold">
          Bold
        </ToggleButton>
        <ToggleButton value="italic" sx={{ flex: 1 }} aria-label="italic">
          Italic
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default TextTab;

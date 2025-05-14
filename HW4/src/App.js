import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Container, Typography } from '@mui/material';

const columns = [
  { field: 'title', headerName: '名稱', width: 300 },
  { field: 'location', headerName: '地點', width: 300 },
  { field: 'price', headerName: '票價', width: 150 },
];

function App() {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    fetch("https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6")
      .then(res => res.json())
      .then(result => {
        const formatted = result.map((item, index) => ({
          id: index,
          title: item.title,
          location: item.showInfo[0]?.location || "無資料",
          price: item.showInfo[0]?.price || "無資料"
        }));
        setData(formatted);
      });
  }, []);

  const filtered = data.filter(d => d.title.includes(keyword));

  return (
    <Container>
      <Typography variant="h4" gutterBottom>景點觀光展覽資訊</Typography>
      <TextField
        label="搜尋名稱"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setKeyword(e.target.value.trim())}
      />
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={filtered}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          pagination
        />
      </div>
    </Container>
  );
}

export default App;


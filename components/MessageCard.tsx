import { Card, CardContent, Typography } from "@mui/material";

export default function MessageCard({
  meow,
}: {
  meow: { author: string; message: string };
}) {
  return (
    <Card sx={{ maxWidth: 500, mb: 1, border: "1px solid cyan" }}>
      <CardContent>
        <Typography gutterBottom variant="body2" component="div">
          {meow.author}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {meow.message}
        </Typography>
      </CardContent>
    </Card>
  );
}

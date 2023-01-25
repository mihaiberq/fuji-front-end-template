import { Card, CardContent, Typography } from "@mui/material";
import { useAccount, useEnsName } from "wagmi";

export default function MessageCard({
  meow,
}: {
  meow: { author: `0x${string}`; message: string };
}) {
  const { address } = useAccount();

  const { data, isError, isLoading } = useEnsName({
    address: meow.author,
  });

  return (
    <Card sx={{ maxWidth: 500, mb: 1, border: "1px solid cyan" }}>
      <CardContent>
        <Typography gutterBottom variant="body2" component="div">
          {meow.author}{" "}
          {address?.toLowerCase() === meow.author.toLowerCase() && "(YOU)"}
          {isLoading && "Loading..."}
          {data && `OR ${data}`}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {meow.message}
        </Typography>
      </CardContent>
    </Card>
  );
}

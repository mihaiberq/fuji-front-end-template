import { Box, CircularProgress } from "@mui/material";
import { BigNumber } from "ethers";
import { Dispatch, SetStateAction } from "react";
import { useContractRead } from "wagmi";
import ContractAbi from "../utils/contract-abi";
import MessageCard from "./MessageCard";

export interface MeowType {
  message: string;
  author: `0x${string}`;
  timestamp: BigNumber;
}
[];

export default function SayMewForm({
  meows,
  setMeows,
}: {
  meows: MeowType[];
  setMeows: Dispatch<SetStateAction<any>>;
}) {
  const { isError, isLoading, error } = useContractRead({
    address: "0xd054e5724d7d595b72abbb0c460e0221cd859c8f",
    abi: ContractAbi,
    chainId: 5,
    functionName: "getAllMeows",
    onSuccess: (responseData) => {
      setMeows(responseData);
    },
  });

  if (isLoading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column-reverse" }}>
      {meows?.map((meow) => (
        <MessageCard key={meow.timestamp.toString()} meow={meow} />
      ))}
      <div>{isError && error?.message}</div>
    </Box>
  );
}

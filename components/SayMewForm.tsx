import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  TextField,
} from "@mui/material";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { ChangeEvent, useCallback, useState } from "react";
import { utils } from "ethers";
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";
import ContractAbi from "../utils/contract-abi";
import { useRouter } from "next/router";

export default function SayMewForm() {
  const [cAddress, setCAddress] = useState(
    "0xd054e5724d7d595b72abbb0c460e0221cd859c8f"
  );

  const modal = useConnectModal();
  const { isConnected } = useAccount();

  const router = useRouter();

  // dont see any forms state library installed, so im doing this by hand
  const [validationError, setValidationError] = useState("");

  const { config } = usePrepareContractWrite({
    address: cAddress,
    abi: ContractAbi,
    functionName: "sayMeow",
    args: ["Meow!"],
  });

  const { isLoading, isError, error, writeAsync } = useContractWrite({
    ...config,
    onSuccess: async (responseData) => {
      const res = await responseData.wait(2);
    },
  });

  const memOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCAddress(e?.target?.value);
  }, []);

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "42ch" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      noValidate
      autoComplete="off"
      onSubmit={async (e) => {
        e.preventDefault();

        if (!utils.isAddress(cAddress)) {
          setValidationError("Not a valid address");
          return;
        }

        await writeAsync?.();

        router.reload();
      }}
    >
      <TextField
        id="standard-basic"
        label="Address"
        variant="standard"
        value={cAddress}
        onChange={memOnChange}
        error={!!validationError}
        helperText={validationError ? validationError : ""}
      />
      <ButtonGroup sx={{ justifyContent: "center" }}>
        {isConnected ? (
          <Button disabled={isLoading} type="submit">
            {isLoading ? <CircularProgress /> : "Submit"}
          </Button>
        ) : (
          <Button
            type="button"
            onClick={() => {
              modal.openConnectModal?.();
            }}
          >
            Login
          </Button>
        )}
      </ButtonGroup>

      {isError && (
        <Box component="span" sx={{ color: "red" }}>
          {error?.message}
        </Box>
      )}
    </Box>
  );
}

import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { log } from "console";
import { useEffect, useState } from "react";

export const UseGetCallById = (id: string | string[]) => {
  console.log(id);
  
  const [call, setcall] = useState<Call>();
  const [isCallLoading, setIsCallLoading] = useState(true);

  const client = useStreamVideoClient();

  useEffect(() => {
    if (!client) return;

    const  loadingCall=async()=> {
      const { calls } = await client.queryCalls({
        filter_conditions: {
          id
        }
      });

      if (calls.length > 0) {
        setcall(calls[0]);
        console.log(calls[0]);
      }

        setIsCallLoading(false);
    }

    loadingCall();
  }, [id, client]);

  return {call ,isCallLoading};
};

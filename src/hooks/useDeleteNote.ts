import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useDeletePost = () => {
    const queryClient = useQueryClient();
    return useMutation(() => {
        return axios.delete(``);
    },
      {
        onSuccess: () => {
          queryClient.invalidateQueries("notes");
        },
      }
    );
  };
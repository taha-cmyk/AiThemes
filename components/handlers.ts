import { signInWithPopup, signOut } from "firebase/auth";
import { toast } from "./ui/use-toast";
import { auth, provider } from "@/firebase/config";

export const handleLogin = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        toast({
          description: "You Logged in",
        });
      })
      .catch((error) => {
        toast({
          description: "It may be a problem try again",
        });
      });
  };

  export const handleLogout = async () => {
    await signOut(auth)
      .then(() => {
        toast({
          description: "You Loged out",
        });
      })
      .catch((error) => {
        toast({
          description: "It may be a problem try again",
        });
      });
  };
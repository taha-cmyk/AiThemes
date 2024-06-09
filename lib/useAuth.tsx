import { toast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, ComponentType } from "react";

const withAuth = <P extends object>(
  WrappedComponent: ComponentType<P>
): ComponentType<P> => {
  const ComponentWithAuth = (props: P) => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        toast({ description: "Login is required" });
        router.replace("/");
      }
    }, [user, router]);

    if (!user) {
      return null; // or a loading spinner
    }

    return <WrappedComponent {...props} />;
  };

  ComponentWithAuth.displayName = `withAuth(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return ComponentWithAuth;
};

export default withAuth;

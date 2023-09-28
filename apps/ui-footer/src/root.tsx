import "./root.scss";

export interface RootProps {
  name: string;
}

export default function Root(_: RootProps) {
  return (
    <footer className="footer">
      <span>&copy; 2023 Acme.</span>
    </footer>
  );
}

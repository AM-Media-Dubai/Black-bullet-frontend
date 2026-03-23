export const metadata = {
  title: "Admin Dashboard | BLACK BULLET GARAGE",
  description: "Internal operations dashboard for Black Bullet Garage Performance Dubai.",
};

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      {children}
    </div>
  );
}

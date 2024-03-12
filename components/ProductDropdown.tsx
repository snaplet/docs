import { useRouter } from "next/router";

export const ProductDropdown = () => {
  const router = useRouter();

  return (
    <select
      className="nx-bg-transparent nx-w-full nx-rounded nx-px-2 nx-py-1.5 nx-border nx-border-gray-200 dark:nx-border-neutral-800 scale-[1.08]"
      defaultValue={router.asPath.startsWith("/seed") ? "seed" : "snapshots"}
      onChange={(ev) => {
        router.push(`/${ev.target.value}`);
      }}
    >
      <option value="snapshots">📸 snapshots</option>
      <option value="seed">🌱 seed</option>
    </select>
  );
};

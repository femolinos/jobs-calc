import React from "react";
import Link from "next/link";

import { HeaderContent, Wrapper } from "./styles";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <Wrapper>
      <HeaderContent>
        <Link href={"/"}>
          <img src="/images/back-arrow.svg" alt="Header return arrow" />
        </Link>

        <p>{title}</p>
      </HeaderContent>
    </Wrapper>
  );
}

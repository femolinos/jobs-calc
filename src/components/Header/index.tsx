import React from "react";
import Link from "next/link";

import { HeaderContent, Wrapper } from "./styles";

export function Header() {
  return (
    <Wrapper>
      <HeaderContent>
        <Link href={"/"}>
          <img src="/images/back-arrow.svg" alt="Header return arrow" />
        </Link>

        <p>Meu perfil</p>
      </HeaderContent>
    </Wrapper>
  );
}

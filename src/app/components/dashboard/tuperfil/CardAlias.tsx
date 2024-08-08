"use client";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoCopyOutline } from "react-icons/io5";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

type CardAliasProps = {
  cvu: string;
  alias: string;
};
const CardAlias = ({ cvu, alias }: CardAliasProps) => {
  const [checkCVU, setCheckCVU] = useState<boolean>(false);
  const [checkAlias, setCheckAlias] = useState<boolean>(false);

  const handleCheckCVU = () => {
    setCheckCVU(true);
    setTimeout(() => {
      setCheckCVU(false);
    }, 3000);
  };

  const handleCheckAlias = () => {
    setCheckAlias(true);
    setTimeout(() => {
      setCheckAlias(false);
    }, 3000);
  };

  return (
    <>
      <div className="card_alias">
        <div>
          <h3>CVU</h3>
          <p>{cvu}</p>
        </div>
        <CopyToClipboard text={cvu}>
          <div onClick={handleCheckCVU}>
            {!checkCVU ? (
              <IoCopyOutline
                style={{ fontSize: "25px", color: "var(--primary-color)" }}
              />
            ) : (
              <IoCheckmarkDoneSharp
                style={{ fontSize: "25px", color: "var(--primary-color)" }}
              />
            )}
          </div>
        </CopyToClipboard>
      </div>
      <div className="card_alias">
        <div>
          <h3>Alias</h3>
          <p>{alias}</p>
        </div>
        <CopyToClipboard text={alias}>
          <div onClick={handleCheckAlias}>
            {!checkAlias ? (
              <IoCopyOutline
                style={{ fontSize: "25px", color: "var(--primary-color)" }}
              />
            ) : (
              <IoCheckmarkDoneSharp
                style={{ fontSize: "25px", color: "var(--primary-color)" }}
              />
            )}
          </div>
        </CopyToClipboard>
      </div>
    </>
  );
};

export default CardAlias;

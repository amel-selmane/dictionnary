import React, { MouseEventHandler } from "react";

type SynonymsBlockProps = {
    synonyms: string[];
    onClick: MouseEventHandler<HTMLButtonElement>;
    className: string;
};

const SynonymsBlock = ({ synonyms, onClick, className }: SynonymsBlockProps) =>
    !!synonyms.length && (
        <div className={`flex gap-x-6 ${className}`}>
            <h3 className="text-mid-grey">Synonym(s) :</h3>
            <ul className="font-bold text-custom-purple">
                {synonyms.map((synonym, j) => (
                    <React.Fragment key={j}>
                        <li className="inline">
                            <button type="button" onClick={onClick} className="relative after:absolute after:bottom-[2px] after:left-0 after:h-[1.5px] after:w-full after:bg-transparent after:transition-colors after:content-[''] hover:after:bg-custom-purple">
                                {synonym}
                            </button>
                        </li>
                        {j < synonyms.length - 1 && ", "}
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );

export default SynonymsBlock;

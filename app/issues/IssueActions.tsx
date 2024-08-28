import { Button, Link } from "@radix-ui/themes";
import React from "react";

const IssueActions = () => {
    return (
        <div className='mb-5'>
            <Button>
                <Link href='/issues/new' className='text-red-500'>
                    New Issue
                </Link>
            </Button>
        </div>
    );
};

export default IssueActions;

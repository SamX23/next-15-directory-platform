"use client";

import { formatDate } from "@/lib/utils";
import { Avatar, Button, Card, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";

const CardItems = ({
  item,
}: {
  item: {
    _id: number;
    _createdAt: Date;
    image: string;
    title: string;
    description: string;
    views: number;
    category: string;
    author: {
      _id: number;
      name: string;
      avatarUrl: string;
    };
  };
}) => (
  <Card className="startup-card">
    <CardBody className="!p-0">
      <div className="flex justify-between items-center text-16-medium">
        <p>{formatDate(item._createdAt)}</p>
        <p>
          {item.views} <small>views</small>
        </p>
      </div>
      <div className="mt-5 flex-between gap-5">
        <div className="flex-1">
          <Link href={`/user/${item.author._id}`}>
            <p className="underline text-16-medium line-clamp-1">
              {item.author.name}
            </p>
          </Link>
          <Link href={`/startup/${item._id}`}>
            <h3 className="text-26-semibold line-clamp-1">{item.title}</h3>
          </Link>
        </div>
        <Link href={`/user/${item.author._id}`}>
          <Avatar src={item.author.avatarUrl} alt="Avatar" />
        </Link>
      </div>
      <Link href={`/startup/${item._id}`} className="space-y-2">
        <p>{item.description}</p>
        <Image src={item.image} alt={item.title} width="100%" height={150} />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link
          href={`/?query=${item.category.toLowerCase()}`}
          className="text-blue-500 underline"
        >
          <p>{item.category}</p>
        </Link>
        <Button type="button" variant="flat" color="primary">
          <Link href={`/startup/${item._id}`}>
            <p>Read more</p>
          </Link>
        </Button>
      </div>
    </CardBody>
  </Card>
);

export default CardItems;

import { pgTable, serial, varchar, date, timestamp, text } from 'drizzle-orm/pg-core';


export const tableUsers = pgTable('users', {
    id: serial('id').primaryKey(),
    name: varchar('fullname', { length: 255 }),
    email: varchar('email', { length: 50 }),
    password : varchar('password', { length: 255 }),
    role : varchar('role', { length: 50 }),
  });

export const tablePosts = pgTable('posts', {
    id: serial('id').primaryKey(),
    author_id: serial('author_id').references(() => tableUsers.id),
    title: varchar('title', { length: 255 }),
    content: text('content'),
    category: varchar('category', { length: 50 }),
    createdAt: timestamp('created_at'),
    updatedAt: timestamp('updated_at'),
    thumbnail: text('thumbnail'),
})
  
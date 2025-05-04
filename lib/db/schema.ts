import { pgTable, integer, text, boolean, uuid, timestamp } from "drizzle-orm/pg-core";

import { relations } from "drizzle-orm";

export const files = pgTable("files", {
    id: uuid("id").defaultRandom().primaryKey(),

    //basic file/folder information
    name: text("name").notNull(),  //name of the file/folder
    path: text("path").notNull(), //doc/project/resume
    size: integer("size").notNull(),
    type: text("type").notNull(),  //"folder" or "file"

    //storage info
    fileUrl: text("file_url").notNull(), //url to access the file
    thumbnailUrl: text("thumbnail_url"),

    //ownership
    userId: text("user_id").notNull(),
    parentId: uuid("parent_id"),  //parent folder (null for root items)

    //file/folder flags
    isFolder: boolean("is_folder").default(false).notNull(),
    isStarred: boolean("is_starred").default(false).notNull(),
    isTrash: boolean("is_trash").default(false).notNull(),

    //timestamps
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull()
});

//relationship between files
export const filesRelations = relations(files, ({one, many}) => ({
    parent: one(files, {
        fields: [files.parentId],
        references: [files.id]
    }),

    children: many(files)
}));

//type defination
export type File = typeof files.$inferSelect;
export type NewFile = typeof files.$inferInsert;
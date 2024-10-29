CREATE TABLE `environments` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text
);
--> statement-breakpoint
CREATE TABLE `features` (
	`id` integer PRIMARY KEY NOT NULL,
	`feature_id` integer,
	`version` text,
	FOREIGN KEY (`feature_id`) REFERENCES `environments`(`id`) ON UPDATE no action ON DELETE no action
);

CREATE TABLE `addresses` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`country` varchar(10),
	`state` varchar(15),
	`city` varchar(15),
	`userId` int,
	CONSTRAINT `addresses_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `questionOptions` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`option1` text,
	`option2` text,
	`option3` text,
	`option4` text,
	`option5` text,
	`qustionId` int,
	CONSTRAINT `questionOptions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `questions` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`category` varchar(15) NOT NULL,
	`description` text,
	`status` varchar(5),
	`answer` tinyint,
	`userId` int,
	CONSTRAINT `questions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`fullname` varchar(30) NOT NULL,
	`email` varchar(20) NOT NULL,
	`birthday` date,
	`gender` varchar(12),
	`image` text,
	`created_at` timestamp(0) DEFAULT (now()),
	`updated_at` timestamp(0) DEFAULT (now()),
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE INDEX `categoryIndex` ON `questions` (`category`);--> statement-breakpoint
CREATE INDEX `statusIndex` ON `questions` (`status`);--> statement-breakpoint
CREATE INDEX `emailIndex` ON `users` (`email`);
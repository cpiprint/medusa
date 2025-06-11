import { Migration } from "@mikro-orm/migrations"

export class Migration20250611104133 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      `alter table if exists "cart_line_item_adjustment" add column if not exists "is_tax_inclusive" boolean not null default false, add column if not exists "promotion_type" text check ("promotion_type" in ('fixed', 'percentage')) null;`
    )
  }

  override async down(): Promise<void> {
    this.addSql(
      `alter table if exists "cart_line_item_adjustment" drop column if exists "is_tax_inclusive", drop column if exists "promotion_type";`
    )
  }
}

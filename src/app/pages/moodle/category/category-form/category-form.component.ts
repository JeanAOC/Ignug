import { Component } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryModel } from '@models/moodle/category.model';
import {
  CoreService,
  InstitutionsService,
  MessageService,
  RoutesService,
} from '@services/core';
import { CategoriesHttpService } from '@services/moodle/categories-http.service';
import {
  ClassButtonActionEnum,
  IconButtonActionEnum,
  LabelButtonActionEnum,
  SkeletonEnum,
} from '@shared/enums';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent {
  // Foreign Keys
  id: string | null = null;

  // form
  form: FormGroup;

  constructor(
    public coreService: CoreService,
    private router: Router,
    private routesService: RoutesService,
    private formBuilder: FormBuilder,
    private categoriesHttpService: CategoriesHttpService,
    public messageService: MessageService,
    //private institutionsService: InstitutionsService
  ) {
    this.form = this.newFormCategory;
  }

  /**
   * get new form
   */
  get newFormCategory(): FormGroup {
    return this.formBuilder.group({
      name: [null, [Validators.required]],
      parent: [null],
      idNumber: [null, [Validators.required]],
      description: [null, [Validators.required]],
      descriptionformat: [2],
    });
  }

  /**
   *function to back
   */
  back(): void {
    this.router.navigate(['/dashboard']);
  }

  /**
   * function to onSubmit
   */
  onSubmit(): void {

    console.log('primer console',this.form.value)
    if (this.form.valid) {
      if (this.id) {
        this.update(this.form.value);
      } else {
        console.log('segundo console',this.form.value)
        this.create(this.form.value);
      }
    } else {
      this.form.markAllAsTouched();
      this.messageService.errorsFields;
    }
  }

   /** Actions **/
   create(item: CategoryModel): void {
    console.log('funtcion create in service',this.categoriesHttpService.create(item))
    this.categoriesHttpService.create(item).subscribe(() => {
      this.form.reset();
      this.back();
    });
  }

  update(item: CategoryModel): void {
    this.categoriesHttpService.update(this.id!, item).subscribe(() => {
      this.form.reset();
      this.back();
    });
  }

  /**
   * forms Getters
   */
  get nameField(): AbstractControl {
    return this.form.controls['name'];
  }
  
  get parentField(): AbstractControl {
    return this.form.controls['parent'];
  }

  get idNumberField(): AbstractControl {
    return this.form.controls['idNumber'];
  }

  get descriptionField(): AbstractControl {
    return this.form.controls['description'];
  }

  // get descriptionFormatField(): AbstractControl {
  //   return this.form.controls['descriptionformat'];
  // }

  /**
   * icons - buttoms
   */
  protected readonly SkeletonEnum = SkeletonEnum;
  protected readonly ClassButtonActionEnum = ClassButtonActionEnum;
  protected readonly LabelButtonActionEnum = LabelButtonActionEnum;
  protected readonly IconButtonActionEnum = IconButtonActionEnum;
}

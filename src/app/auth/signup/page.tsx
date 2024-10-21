export default function SignupPage() {
    return (
      <div>
        <h2>ثبت نام</h2>
        <form>
          <input type="text" placeholder="نام کاربری" /><br />
          <input type="email" placeholder="ایمیل" /><br />
          <input type="password" placeholder="رمز عبور" /><br />
          <button type="submit">ثبت نام</button>
        </form>
      </div>
    );
  }
  